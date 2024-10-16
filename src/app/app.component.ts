import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  listaTareas: string[] = [];
  nuevaTarea = '';

  private _tareaService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareaService.getTareas();
  }

  addTarea() {
    this._tareaService.addTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareaService.getTareas();
  }

  deleteTarea(index: number) {
    this._tareaService.deleteTarea(index);
    this.listaTareas = this._tareaService.getTareas();
  }

}
