import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default function TaskForm() {
  async function createTask(formData: FormData) {
    'use server';
    const name = formData.get('name')?.toString();
    const description = formData.get('description')?.toString();
    const priority = formData.get('priority')?.toString();

    if (!name) {
      return;
    }

    const newTask = await prisma.task.create({
      data: {
        name: name,
        description: description,
        priority: priority
      }
    });

    console.log(newTask);
    redirect('/');
  }

  return (
    <form action={createTask}>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Crear tarea</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input name="name" id="name" autoFocus autoComplete="off" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                name="description"
                id="description"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Importancia</Label>
              <Select name="priority">
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Baja">Baja</SelectItem>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Alta">Alta</SelectItem>
                  <SelectItem value="Urgente">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            Cancelar
          </Link>
          <Button type="submit">Guardar</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
