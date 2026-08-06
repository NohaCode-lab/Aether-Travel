export type DomainEventType =
  | 'TripCreated'
  | 'BookingCompleted'
  | 'DocumentUploaded'
  | 'VisaUpdated'
  | 'NotificationSent'
  | 'AIRequestCompleted';

export interface DomainEvent<T = any> {
  id: string;
  type: DomainEventType;
  payload: T;
  timestamp: Date;
}

export type EventHandler<T = any> = (event: DomainEvent<T>) => void | Promise<void>;

export class EventBus {
  private handlers: Map<DomainEventType, EventHandler[]> = new Map();

  public subscribe<T = any>(type: DomainEventType, handler: EventHandler<T>): void {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, []);
    }
    this.handlers.get(type)!.push(handler);
  }

  public async publish<T = any>(type: DomainEventType, payload: T): Promise<void> {
    const event: DomainEvent<T> = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      payload,
      timestamp: new Date(),
    };

    console.log(`[EventBus] Published Event '${type}' (ID: ${event.id})`);

    const subscribers = this.handlers.get(type) || [];
    for (const handler of subscribers) {
      try {
        await handler(event);
      } catch (err) {
        console.error(`[EventBus] Handler error for event ${type}:`, err);
      }
    }
  }
}

export const eventBus = new EventBus();

// Register default event logging & background workers
eventBus.subscribe('TripCreated', (event) => {
  console.log(`[Worker] TripCreated event processed for user: ${event.payload.userId}`);
});

eventBus.subscribe('BookingCompleted', (event) => {
  console.log(`[Worker] BookingCompleted notification queued for: ${event.payload.bookingId}`);
});
