import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private localoStorasgeKey = 'listaTareas';
  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localoStorasgeKey as string) || '[]');
  }

  addTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localoStorasgeKey, JSON.stringify(tareas));
  }

  deleteTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localoStorasgeKey, JSON.stringify(tareas));
  }
}
