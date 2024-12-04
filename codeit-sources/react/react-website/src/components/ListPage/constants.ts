import { css } from "styled-components";

import catalogIcon from "@assets/catalog.svg";
import communityIcon from "@assets/community.svg";

import type { CSSProp } from "styled-components";

const ICON = {
  catalog: {
    src: catalogIcon,
    alt: "책",
  },
  community: {
    src: communityIcon,
    alt: "말풍선",
  },
};

const THUMB_CSS: { [key: string]: CSSProp } = {
  catalog: css`
    background-color: #ebebeb;

    & h1 {
      color: #545454;
    }
    & p {
      color: #878787;
    }
  `,
  community: css`
    background-color: #73bfad;

    & h1 {
      color: #fff;
    }
    & p {
      color: #fff;
    }
  `,
};

export { ICON, THUMB_CSS };
