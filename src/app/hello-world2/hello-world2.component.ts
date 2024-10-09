import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world2',
  templateUrl: './hello-world2.component.html',
  styleUrls: ['./hello-world2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorld2Component implements OnInit {

  ngOnInit(): void { }

}
