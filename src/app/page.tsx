import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import prisma from '@/lib/prisma';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';

async function HomePage() {
  const tasks = await prisma.task.findMany();

  console.log(tasks);

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {task.name}
              <Badge
                className={clsx({
                  'bg-red-500': task.priority === 'Urgente',
                  'bg-orange-500': task.priority === 'Alta',
                  'bg-yellow-500': task.priority === 'Media',
                  'bg-green-500': task.priority === 'Normal',
                  'bg-blue-500': task.priority === 'Baja',
                  'text-white': true,
                  'flex-shrink-0': true
                })}
              >
                {task.priority}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className="text-slate-500 text-xs">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </CardContent>
          <CardFooter className="flex gap-x-2 justify-end">
            <Button variant="outline">Editar</Button>
            <Button variant="destructive">Eliminar</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default HomePage;
