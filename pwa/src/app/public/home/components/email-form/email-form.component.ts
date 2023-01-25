import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { faRobot} from '@fortawesome/free-solid-svg-icons';

import { EmailService } from 'src/app/_services/email.service';
import { FormValidationService } from 'src/app/_services/form-validation.service';
import { SnackbarService } from 'src/app/_services/snackbar.service';
import { SpinnerService } from 'src/app/_services/spinner.service';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})

export class EmailFormComponent implements OnInit {

  faRobot = faRobot;
  
  // Email Form Group
  emailForm = new FormGroup({
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = false;
  success = '';

  constructor(private formBuilder: FormBuilder,
              private emailService: EmailService,
              private customValidator : FormValidationService,
              private snackbarService: SnackbarService,
              public spinnerService: SpinnerService) {
    this.emailForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.customValidator.validEmail()
        ]
      ],
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ]
      ],
      body: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ]
      ]
    });
  }

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.emailForm.controls;
  }

  onSubmit(emailForm: any) {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    }
    const email = this.emailForm.get('email')?.value;
    this.emailService.sendEmail(emailForm).subscribe((_response: any) => {
      this.snackbarService.showNotification(email + ' votre message a bien été envoyé.');
      this.emailForm.reset();
      for (let control in this.emailForm.controls) {
        this.emailForm.controls[control].setErrors(null);
      }
    })
  }

}
