import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatSuffix, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { EcommerceStore } from '../../ecommerce.store';
import { SignUpParams } from '../../models/user';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';




@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogClose,
    MatInput,
    MatFormField,
    MatSuffix,
    MatPrefix,
    MatButton,
    ReactiveFormsModule,
   
],
  templateUrl: './sign-up-dialog.html',
  styles: ``,
})
export class SignUpDialog {


  fb = inject(NonNullableFormBuilder);
    store = inject(EcommerceStore)
    matDialog = inject(MatDialog)


    data = inject<{checkout: boolean}>(MAT_DIALOG_DATA)
    dialogRef = inject(MatDialogRef)

    
    passwordVisible = false;

    togglePass(){
      this.passwordVisible = !this.passwordVisible
    }




    
  signUpForm = this.fb.group({
    name: ['user',Validators.required],
    email: ['user@gmail.com', Validators.required],
    password: ['user123', Validators.required],
    confirmPassword: ['user123', Validators.required],
  });

  




  signUp() {
    if(!this.signUpForm.valid){
      this.signUpForm.markAllAsTouched
      return;
    }
    const {name, email, password} = this.signUpForm.value;

    this.store.signIn({ name, email, password , checkout: this.data?.checkout, dialogId: this.dialogRef.id} as SignUpParams);

  }

  //after clicking don'have account it opens signup dialog
   openSignInDialog(){
    this.dialogRef.close();
      this.matDialog.open(SignInDialog, {
        disableClose: true,
        data:{
          checkout: this.data?.checkout
        }
      });
   }
   

}
