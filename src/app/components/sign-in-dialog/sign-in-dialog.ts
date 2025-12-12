import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatSuffix, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { EcommerceStore } from '../../ecommerce.store';
import { SignInParams } from '../../models/user';
import { SignUpDialog } from '../sign-up-dialog/sign-up-dialog';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-sign-in-dialog',
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
  templateUrl: './sign-in-dialog.html',
  styles: ``,
})
export class SignInDialog {


  fb = inject(NonNullableFormBuilder);
    store = inject(EcommerceStore)
    matDialog = inject(MatDialog)


    data = inject<{checkout: boolean}>(MAT_DIALOG_DATA)
    dialogRef = inject(MatDialogRef)

    passwordVisible = signal(false);
  signInForm = this.fb.group({
    email: ['ramu@gmail.com', Validators.required],
    password: ['ramu123', Validators.required],
  });




  signIn() {
    if(!this.signInForm.valid){
      this.signInForm.markAllAsTouched
      return;
    }
    const {email, password} = this.signInForm.value;

    this.store.signIn({ email, password , checkout: this.data?.checkout, dialogId: this.dialogRef.id} as SignInParams);

  }

  //after clicking don'have account it opens signup dialog
   openSignUpDialog(){
    this.dialogRef.close()
      this.matDialog.open(SignUpDialog, {
        disableClose: true,
        data:{
          checkout: this.data?.checkout,
        }
      });
   }

}
