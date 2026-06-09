/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "유도현",
    father: "유재성",
    mother: "신명숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이민지",
    father: "이창영",
    mother: "조경애",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-04",
    time: "15:30",
    venue: "더 레이나 웨딩홀",
    hall: "에벤에셀관 B1",
    address: "경기도 의정부시 호암로 95",
    tel: "031-876-2888",
    mapLinks: {
      kakao: "https://kko.to/uLYGqpzPqd",
      naver: "https://naver.me/5pwowzMl"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n소중한 인연으로 만나\n평생을 함께하기로 약속했습니다.\n\n기쁜 날, 귀한 걸음 하시어\n저희 두 사람의 새로운 시작을\n따뜻한 마음으로 축복해주시면 감사하겠습니다.\n\n함께해주시는 마음 오래도록 간직하며\n서로 아끼고 배려하는 모습으로 살아가겠습니다.\n\n행복한 날에 소중한 분들과 함께할 수 있기를 바랍니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "유도현", bank: "농협은행", number: "352-0860-7676-83" },
      { role: "아버지", name: "유재성", bank: "농협은행", number: "356-8365-1429-73" },
      { role: "어머니", name: "신명숙", bank: "우리은행", number: "209-378040-02-001" }
    ],
    bride: [
      { role: "신부", name: "이민지", bank: "국민은행", number: "538401-04-114481" },
      { role: "아버지", name: "이창영", bank: "신한은행", number: "110-281-397900" },
      { role: "어머니", name: "조경애", bank: "국민은행", number: "289-21-0247-594" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 7월 4일, 소중한 분들을 초대합니다."
  }
};
