export const deliveryOptions = [
  {
    id: "1",
    deilveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deilveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deilveryDays: 1,
    priceCents: 999,
  },
];

export const getDeliveryOption = (deliveryOptionId) => {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption;
};
