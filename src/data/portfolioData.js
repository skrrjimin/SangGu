export const SANGGU_PROFILE = {
  name: "SANGGU",
  title: "SANGGU PORTFOLIO",
  period: "2026",
  handle: "@oriori_kk",
  sns: {
    twitter: "https://x.com/oriori_kkk",
    instagram: "https://www.instagram.com/oriori_kk/",
    email: "myamu6608@naver.com"
  },
  metaNavItems: ["WEBTOON", "WORKS", "COLLECTION", "2026", "@oriori_kk"]
};

export const WEBTOON_PROJECTS = [
  {
    id: "project-1",
    title: "놀러와요 휴양의섬!",
    author: "글/그림 상구",
    metaLine: "글/그림 상구",
    status: "연재중",
    genre: "일상 / 판타지",
    synopsis: "마약범 주머니나 털던 사기꾼, 핸드폰도 경찰도 없는 기묘한 휴양섬에 불시착한다.",
    tags: ["#일상개그", "#판타지", "#막장"],
    coverImage: "/images/project1/cover.jpg",
    episodes: [
      {
        id: 1,
        epNumber: 1,
        title: "1화",
        uploadDate: "26.10.15",
        thumbnail: "/images/project1/ep1/1화_new_001.jpg",
        cuts: Array.from({ length: 118 }, (_, i) => ({
          type: "panel",
          imageUrl: `/images/project1/ep1/1화_new_${String(i + 1).padStart(3, "0")}.jpg`
        }))
      },
      {
        id: 2,
        epNumber: 2,
        title: "2화",
        uploadDate: "26.10.08",
        thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=640&q=80",
        cuts: [
          { type: "narration", text: "휴양섬에서의 기묘한 둘째 날이 밝았다." }
        ]
      },
      {
        id: 3,
        epNumber: 3,
        title: "3화",
        uploadDate: "26.10.01",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80",
        cuts: [
          { type: "narration", text: "섬 주민들의 수상한 비밀이 하나씩 드러난다." }
        ]
      },
      {
        id: 4,
        epNumber: 4,
        title: "4화",
        uploadDate: "26.09.24",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=640&q=80",
        cuts: [
          { type: "narration", text: "과연 이 섬에서 무사히 빠져나갈 수 있을까?" }
        ]
      }
    ]
  },
  {
    id: "project-2",
    title: "무인입시",
    author: "글/그림 상구",
    metaLine: "글/그림 상구",
    status: "연재중",
    genre: "현대사극",
    synopsis: "무인들이 입시를 치르는 시대, 상구의 파란만장한 입시 도전기.",
    tags: ["#현대판타지", "#개그", "#액션"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    episodes: [
      {
        id: 1,
        epNumber: 1,
        title: "1화",
        uploadDate: "26.10.13",
        thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=640&q=80",
        cuts: [
          { type: "narration", text: "무인들이 입시를 치르는 시대, 첫 번째 시험이 시작된다." }
        ]
      }
    ]
  },
  {
    id: "project-3",
    title: "제목",
    author: "글/그림",
    displayRatio: "3x4",
    status: "기획중",
    genre: "스토리",
    rating: "9.91",
    synopsis: "새로운 스토리 기획 준비작.",
    tags: ["#기획작", "#신작", "#준비중"],
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    episodes: [
      {
        id: 1,
        title: "프롤로그",
        rating: "9.91",
        uploadDate: "26.08.01",
        thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=640&q=80",
        cuts: [
          { type: "narration", text: "새로운 세계의 문이 열린다." }
        ]
      }
    ]
  }
];
