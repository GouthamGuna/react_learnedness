import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  //baseUrl = window.location.origin;
  errorMessage: string = '';
  successMessage: string = '';
  userForm!: FormGroup;
  users: any[] = [];
  isVisible = false;
  buttonVal = 'Save';

  constructor() {
    this.hideElementAfterTimeout();
  }

  hideElementAfterTimeout() {
    setTimeout(() => {
      this.isVisible = true; // Set visibility to false after 5 seconds
    }, 5000); // Timeout duration in milliseconds (5000 ms = 5 seconds)
  }

  async getUser() {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/v1/users/get-users'
      );
      this.users = response.data;
      console.log(this.users);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  ngOnInit() {
    this.getUser();

    this.userForm = new FormGroup({
      username: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      isUpdate: new FormControl(false),
    });
  }

  getIsUpdateValue(): boolean {
    return this.userForm.get('isUpdate')?.value; // Use optional chaining to avoid null reference
  }

  getUserNameValue(): string {
    return this.userForm.get('username')?.value;
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.getIsUpdateValue()) {
      axios({
        method: 'put',
        url: `http://localhost:8080/api/v1/users/update?username=${this.getUserNameValue()}`,
        data: this.userForm.value,
      })
        .then((response) => {
          this.getUser();
          this.formRest();
          this.successMessage = response.data;
        })
        .catch((error) => {
          this.errorMessage = 'An error occurred while creating the user';
          console.error(error);
        });
      return;
    }

    axios({
      method: 'post',
      url: 'http://localhost:8080/api/v1/users/create',
      data: this.userForm.value,
    })
      .then((response) => {
        //window.location.href = `${this.baseUrl}/home`;
        this.formRest();
        if (response.data) {
          this.getUser();
          this.successMessage = 'User created successfully';
          return;
        }
        this.errorMessage = 'Username already taken';
      })
      .catch((error) => {
        this.errorMessage = 'An error occurred while creating the user';
        console.error(error);
      });
  }

  async deleteUser(arg0: any) {
    alert('Are you sure you want to delete this user?');
    const response = await axios.delete(
      `http://localhost:8080/api/v1/users/delete?username=${arg0}`
    );
    console.log('User deleted successfully : ', response.data);
    alert(response.data);
    this.getUser();
  }

  async editUser(arg0: any) {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/get-user?username=${arg0}`
      );
      this.buttonVal = 'Update';
      console.log(response.data);

      this.userForm = new FormGroup({
        username: new FormControl(response.data.username),
        firstName: new FormControl(response.data.firstName),
        lastName: new FormControl(response.data.lastName),
        email: new FormControl(response.data.email),
        isUpdate: new FormControl(response.data.update),
      });
    } catch (e) {
      console.error(e);
    }
  }

  formRest() {
    this.userForm.reset();
    this.buttonVal = 'Save';
  }
}
