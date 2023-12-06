'use strict';

document.addEventListener('DOMContentLoaded', () => {
  async function getUserAccount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      return 'ユーザーアカウント情報を取得できませんでした';
    }
    return 'ユーザーアカウントを情報取得できました';
  }

  async function log() {
    const message = getUserAccount();
    console.log(message);
  }

  log();
});
