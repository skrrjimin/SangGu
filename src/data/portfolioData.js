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
        thumbnail: "/images/project1/ep1/001.jpg",
        cuts: Array.from({ length: 118 }, (_, i) => ({
          type: "panel",
          imageUrl: `/images/project1/ep1/${String(i + 1).padStart(3, "0")}.jpg`
        }))
      },
      {
        id: 2,
        epNumber: 2,
        title: "2화",
        uploadDate: "26.10.08",
        thumbnail: "/images/project1/ep2/001.jpg",
        cuts: Array.from({ length: 121 }, (_, i) => ({
          type: "panel",
          imageUrl: `/images/project1/ep2/${String(i + 1).padStart(3, "0")}.jpg`
        }))
      },
      {
        id: 3,
        epNumber: 3,
        title: "3화",
        uploadDate: "26.10.01",
        thumbnail: "/images/project1/ep3/001.jpg",
        cuts: Array.from({ length: 94 }, (_, i) => ({
          type: "panel",
          imageUrl: `/images/project1/ep3/${String(i + 1).padStart(3, "0")}.jpg`
        }))
      },
      {
        id: 4,
        epNumber: 4,
        title: "4화",
        uploadDate: "26.09.24",
        thumbnail: "/images/project1/ep4/001.jpg",
        cuts: Array.from({ length: 111 }, (_, i) => ({
          type: "panel",
          imageUrl: `/images/project1/ep4/${String(i + 1).padStart(3, "0")}.jpg`
        }))
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
    synopsis: "무인이 천대받는 현대, 문인 사회에서 무인으로 입시에 도전하는 고등학생 손창진의 이야기!",
    tags: ["#현대판타지", "#개그", "#액션"],
    coverImage: "/images/project2/cover.jpg",
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
  }
];
