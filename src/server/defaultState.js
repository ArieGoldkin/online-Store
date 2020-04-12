import md5 from "md5";

export const defaultState = {
  // session: {
  //   authenticated: false,
  // },
  users: [
    {
      id: "U1",
      name: "Arie",
      passwordHash: md5("GOLD"),
    },
    {
      id: "U2",
      name: "Liroy",
      passwordHash: md5("LIROY"),
    },
  ],
  categories: [
    {
      name: null,
      id: null,
    },
    {
      name: "Watches",
      id: "C1",
    },
    {
      name: "Cameras",
      id: "C2",
    },
    {
      name: "Motion Sensors",
      id: "C3",
    },
    {
      name: "Maskes",
      id: "C4",
    },
  ],
  products: [
    {
      name: "Smart Watch GPS",
      id: "P1",
      category: "C1",
      owner: "U1",
      price: 255,
      units: 5,
      isAvailable: true,
    },
    {
      name:
        "1080P Mini Camera Support TF Card HD Video Audio Recorder DV Camera",
      id: "P2",
      category: "C2",
      owner: "U1",
      price: 100,
      units: 10,
      isAvailable: true,
    },
    {
      name: "Sports Replacement Nylon Strap For Fitbit Versa 2",
      id: "P3",
      category: "C1",
      owner: "U2",
      price: 20,
      units: 20,
      isAvailable: true,
    },
    {
      name: "pot KN95 Mask SmartMi PM2.5 Mist Mask",
      id: "P4",
      category: "C4",
      owner: "U2",
      price: 14,
      units: 0,
      isAvailable: false,
    },
    {
      name: "Hyman Z-Wave PIR Motion",
      id: "P5",
      category: "C3",
      owner: "U2",
      price: 44,
      units: 14,
      isAvailable: true,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      product: "P1",
      content: "What colors are available?",
    },
  ],
};
