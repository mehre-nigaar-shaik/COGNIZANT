import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  /*
   * Why providers: [NotificationService] creates a scoped instance:
   * When a service is provided in the component's providers array:
   * 1. Angular creates a new instance of this service for every instance of this component.
   * 2. This instance is isolated from the root singleton injector and other component instances.
   * 3. The service instance's lifecycle is bound to the component. It is created when the component
   *    is initialized and destroyed when the component is destroyed.
   */
  providers: [NotificationService]
})
export class Notification {
  constructor(private notificationService: NotificationService) {}

  get messages(): string[] {
    return this.notificationService.getMessages();
  }

  addMessage(msg: string): void {
    if (msg.trim()) {
      this.notificationService.add(msg);
    }
  }

  clearAll(): void {
    this.notificationService.clear();
  }
}
