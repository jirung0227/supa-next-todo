# Supabase, Next 풀스택 시작하기 (feat. 슈파베이스 OAuth, nextjs 14)

## 패키지 설치

```
yarn add react-spinners@^0.13.8
yarn add react-icons@^5.0.1
yarn add @supabase/supabase-js@^2.42.0
yarn add @supabase/ssr@^0.1.0
yarn add @supabase/auth-ui-react@^0.4.7
yarn add @supabase/auth-ui-shared@^0.1.8
yarn add cookies-next@^4.1.1
```

## Generating TypeScript Types

```
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > types/supabase.ts
```

## useCopyToClipboard

```
yarn add usehooks-ts
```

Clipboard API를 사용하여 텍스트를 클립보드에 복사하는 사용자 정의 후크입니다.
