import {Component} from 'angular2/core';
import {SvgIconComponent} from './svg-icon.component';

@Component({
	selector: 'demo-app',
	directives: [ SvgIconComponent ],
	template: `
		<div style="margin:15px;">
			<div style="width:500px;">
				<div style="width:100px;float:left;">
					<svg-icon src="images/eye.svg" style="fill:red;"></svg-icon>
				</div>
				<div style="width:100px;float:left;margin-left:20px;">
					<svg-icon src="images/eye.svg" style="fill:green;"></svg-icon>
				</div>
				<div style="width:100px;float:left;margin-left:20px;">
					<svg-icon src="images/eye.svg" style="fill:blue;"></svg-icon>
				</div>
			</div>

			<form style="clear:both;">
				<h2>Set the style</h2>
				<fieldset style="border:none;">
					<label>red:</label> <input type="number" min="0" max="255" [(ngModel)]="r">
					<label>green:</label> <input type="number" min="0" max="255" [(ngModel)]="g">
					<label>blue:</label> <input type="number" min="0" max="255" [(ngModel)]="b">
				</fieldset>
				<label>width:</label> <input type="number" min="0" max="1000" [(ngModel)]="w"><label> px</label>
			</form>
			<div [style]="getStyle()">
				<svg-icon src="images/eye.svg"></svg-icon>
			</div>
			<tt>&lt;div style="{{getStyle()}}"&gt;<br/>
				&nbsp;&nbsp;&nbsp;&lt;svg-icon src="images/eye.svg"&gt;&lt;/svg-icon&gt;<br/>
				&lt;/div&gt;
			</tt>
		</div>
		
	`
})

export class DemoAppComponent { 
	private r:number = 120;
	private g:number = 120;
	private b:number = 120;
	private w:number = 75;

	getStyle(): string {
		return 'width:' + this.w + 'px;fill:rgb(' + this.r + ',' + this.g + ',' + this.b + ');';
	}
}
