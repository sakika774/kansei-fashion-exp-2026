export type RatingScaleItem = {
  id: string;
  label: string;
};

export type RatingScaleDefinition = {
  min: number;
  max: number;
  labels: string[];
  items: RatingScaleItem[];
};

export type Stimulus = {
  id: string;
  imageUrl: string;
};

export const experimentConfig = {
  title: "ファッションサイトに対する印象評価実験",
  description: "閲覧したサイトについて、以下の項目を評価してください。",

  ratingScale: {
    min: 0,
    max: 4,
    labels: [
      "全くそうでない",
      "ややそうである",
      "そうである",
      "かなりそうである",
      "非常にそうである",
    ],
    items: [
      { id: "intellectual", label: "知的な" },
      { id: "cute", label: "かわいい" },
      { id: "urban", label: "都会的な" },
      { id: "simple", label: "素朴な" },
      { id: "free", label: "自由な" },
      { id: "mystical", label: "神秘的な" },
      { id: "active", label: "活動的な" },
      { id: "elegant", label: "上品な" },
    ],
  } as RatingScaleDefinition,

  stimuli: [
    {
      id: "img_01",
      imageUrl: "/stimuli/sample01.jpg",
    },
  ] as Stimulus[],
};