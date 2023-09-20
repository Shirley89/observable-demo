import { createSubChannelKit } from "@bdlite/observable/es/create-observable-kit";
import { CHANNEL_NAME } from "./constants";

const { subscribe } = createSubChannelKit(
  { channelName: CHANNEL_NAME },
  { relay: 1 }
);

export const subscribeUser = subscribe;
