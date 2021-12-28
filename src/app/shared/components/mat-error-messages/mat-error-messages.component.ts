import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: '[matErrorMessages]',
  template: ` {{ error }} `,
  styles: [],
})
export class MatErrorMessagesComponent implements AfterViewInit {
  public error = '';
  private inputRef: MatFormFieldControl<MatInput>;

  constructor(private _inj: Injector) {}

  public ngAfterViewInit() {
    // grab reference to MatFormField directive, where form control is accessible.
    let container = this._inj.get(MatFormField);
    this.inputRef = container._control;

    // sub to the control's status stream
    this.inputRef.ngControl.statusChanges.subscribe(this.updateErrors);
  }

  private updateErrors = (state: 'VALID' | 'INVALID') => {
    if (state === 'INVALID') {
      // active errors on the FormControl
      let controlErrors = this.inputRef.ngControl.errors;

      // just grab one error
      const firstError = Object.keys(controlErrors)[0];

      if (firstError === 'required') this.error = 'This field is required.';

      if (firstError === 'minlength')
        this.error = 'This field should be longer.';

      if (firstError === 'error from my own custom validator')
        this.error = 'You get the point.';
      // .....
    }
  };
}
