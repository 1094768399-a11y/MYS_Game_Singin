import { doMYSSign } from './src/MYS/index.js'
import { doCloudSign } from './src/MihoyoCloud/index.js'

async function main() {
  await doMYSSign('Genshin')
  await doMYSSign('StarRail')
  await doMYSSign('Zenless')  // 新增绝区零米游社签到
  await doCloudSign('CloudYS')
  await doCloudSign('CloudSR')
}

main().then()
