
import {Component,Host,Inject, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder } from '@angular/forms';
import {ReactiveFormsModule } from "@angular/forms";

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name?: string ;
  position?: number ;
  weight?: number;
  symbol?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-element',
  standalone: true,
  imports: [
    CommonModule,
     MatTableModule,
     MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    ],
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<any>;

  constructor(public dialog: MatDialog){
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

   
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,{
      height: '400px',
      width: '600px',
    }) 
    dialogRef.afterClosed().subscribe(result => {
     if(result=='ok'){
      console.log('mi resultado',result)
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
     }
      
    });
}

}
@Component({
  selector: 'dialog-overview-example-dialog',
  standalone: true,
  templateUrl: 'formulario.html',
  styleUrls: ['./element.component.css'],

  imports: [
    CommonModule,
     MatTableModule,
     MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    ],
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
 
  elementForm=this.fb.nonNullable.group({
    name:'',
    weight:0,
    symbol:''
  })
  onSubmit(){
    console.log(this.elementForm.value)
    const elemento={...this.elementForm.value, position:ELEMENT_DATA.length+1}
    ELEMENT_DATA.push(elemento)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
 
}