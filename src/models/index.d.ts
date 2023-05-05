import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerTickets = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tickets, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly qrString?: string | null;
  readonly checkedIn?: boolean | null;
  readonly Events?: Events | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketsEventsId?: string | null;
}

type LazyTickets = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tickets, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly qrString?: string | null;
  readonly checkedIn?: boolean | null;
  readonly Events: AsyncItem<Events | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketsEventsId?: string | null;
}

export declare type Tickets = LazyLoading extends LazyLoadingDisabled ? EagerTickets : LazyTickets

export declare const Tickets: (new (init: ModelInit<Tickets>) => Tickets) & {
  copyOf(source: Tickets, mutator: (draft: MutableModel<Tickets>) => MutableModel<Tickets> | void): Tickets;
}

type EagerEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datetime?: string | null;
  readonly capacity?: number | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datetime?: string | null;
  readonly capacity?: number | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
}