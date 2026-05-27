# Portfolio Assets

## 현재 사용 중인 이미지

| 용도 | 실제 사용 파일 | 원본/참고 위치 | 메모 |
| --- | --- | --- | --- |
| 프로필 사진 | `assets/profile.png` | `docs/images/`에 원본 추가 가능 | About Me 프로필 카드에서 사용 |

## 이미지 관리 규칙

- 웹에서 실제로 import하는 이미지는 `assets/`에 둡니다.
- 원본, 후보 이미지, 참고 이미지는 `docs/images/`에 둡니다.
- 최종 사용 전에는 가능하면 정사각형 또는 사용 비율에 맞게 잘라둡니다.
- 프로필 이미지는 1:1 비율을 기본으로 사용합니다.
- 파일명은 역할이 보이게 작성합니다.

## 권장 파일명

- `profile-original.png`
- `profile-cropped.png`
- `project-{name}-cover.png`
- `project-{name}-architecture.png`
- `skill-{name}.svg`

## 최적화 메모

- 웹 표시용 이미지는 용량을 줄인 버전을 `assets/`에 둡니다.
- 원본 품질 보존이 필요한 이미지는 `docs/images/`에만 보관합니다.
- GitHub Pages 배포 기준으로 너무 큰 이미지는 초기 로딩을 느리게 만들 수 있으므로 1MB 이하를 우선 목표로 합니다.
