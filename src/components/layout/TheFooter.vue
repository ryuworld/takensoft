<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <h1 class="logo">
          <img src="../../assets/images/logo_simbol.png" alt="simbol" />
        </h1>
      </div>
      <div class="row">
        <address>
          <ul>
            <li>(주)테이큰소프트</li>
            <li>대표 : 임상현</li>
            <li>사업자등록번호: 849-87-02044</li>
            <li>
              주소 : 경상북도 경산시 대학로 280, 영남대학교 창업보육센터
              신관218호
            </li>
            <li class="copyright">
              Copyright 2021. Takensoft. all rights reserved.
            </li>
          </ul>
          <ul>
            <li>고객지원</li>
            <li>TEL. 053-811-1700</li>
            <li>FAX. 053-811-1701</li>
            <li>Email. cs@takensoft.co.kr</li>
          </ul>
        </address>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  .container {
    max-width: 1280px;
    margin: 0 auto;
    line-height: 180%;
    .row:last-child address {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      ul:last-child {
        text-align: right;
      }
      ul:last-child li:first-child {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
