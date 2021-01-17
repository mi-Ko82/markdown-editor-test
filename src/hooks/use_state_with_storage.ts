/*
  カスタムフック
  localStorageの取得と保存
  init: 初期値
  key: localStorageに保存する際のキー
  返り値: useStateから取得した値とlocalStorageへの保存を組み合わせた更新関数
*/

import { useState } from 'react'

export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }

  return [value, setValueWithStorage]
}