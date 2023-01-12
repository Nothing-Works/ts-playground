// unions and intersections
interface test {
  id: string;
}

const userCreatedEvent = {
  eventType: "user_created",
  parameters: {
    id: "uuid",
    name: "Andy",
    email: "andy@gamil.com",
  },
};

const userDeletedEvent = {
  eventType: "user_deleted",
  parameters: {
    id: "uuid",
  },
};

// how do we type these?

interface UserEvent {
  eventType: "user_created" | "user_deleted";
  parameters: {
    id: string;
    name?: string;
    email?: string;
  };
}

// it becomes really hard to discriminate on a particular event
const handleUserEvent = (event: UserEvent) => {
  if (event.eventType === "user_created") {
    // do something
    console.log(event.parameters.name);
    return;
  }
  if (event.eventType === "user_deleted") {
    // do something
    console.log(event.parameters.id);
    // this is bad because I can still access name however name should not be on deleted event.
    console.log(event.parameters.name);
    return;
  }
};

interface UserCreatedEvent {
  eventType: "user_created";
  parameters: {
    id: string;
    name: string;
    email: string;
  };
}

interface UserDeletedEvent {
  eventType: "user_deleted";
  parameters: {
    id: string;
  };
}

type BetterEvent = UserCreatedEvent | UserDeletedEvent;

// this is better
const handleBetterUserEvent = (event: BetterEvent) => {
  if (event.eventType === "user_created") {
    // do something
    console.log(event.parameters.name);
    return;
  }
  if (event.eventType === "user_deleted") {
    // do something
    console.log(event.parameters.id);
    // we can not access name here
    // console.log(event.parameters.name);
    return;
  }
};
