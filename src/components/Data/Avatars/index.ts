import textData from "../../../../textData.json";
import { ImageItem } from "../../../types";

export const avatarsImages: Record<string, ImageItem[]> = {
  People: [
    {
      id: 1,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.female1}`,
    },
    {
      id: 2,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.female2}`,
    },
    {
      id: 3,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.female3}`,
    },
    {
      id: 4,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.female4}`,
    },
    {
      id: 5,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.male1}`,
    },
    {
      id: 6,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.male2}`,
    },
    {
      id: 7,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.male3}`,
    },
    {
      id: 8,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.male4}`,
    },
  ],
  Animals: [
    {
      id: 9,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.animal1}`,
    },
    {
      id: 10,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.animal2}`,
    },
    {
      id: 11,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.animal3}`,
    },
    {
      id: 12,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.animal4}`,
    },
  ],
  Cars: [
    {
      id: 13,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.car1}`,
    },
    {
      id: 14,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.car2}`,
    },
    {
      id: 15,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.car3}`,
    },
    {
      id: 16,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.car4}`,
    },
  ],
  Food: [
    {
      id: 17,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.food1}`,
    },
    {
      id: 18,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.food2}`,
    },
    {
      id: 19,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.food3}`,
    },
    {
      id: 20,
      source: `${textData.value.firebase.storage.path}${textData.value.firebase.storage.source.food4}`,
    },
  ],
};
