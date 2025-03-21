export const clipboard = (text) => {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("복사되었습니다.");
    })
    .catch((err) => {
      console.error("복사 실패: ", err);
    });
};
