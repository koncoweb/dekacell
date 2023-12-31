// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5W4T71ZWGdu6kYqLvuuQ3N
// Component: BJiRoLYqOBm

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: E68qrDQCcYGuytT/component
import ValueProp from "../../ValueProp"; // plasmic-import: bjiW3HuNh1M7Jjd/component
import KolomKontak from "../../KolomKontak"; // plasmic-import: yBAyndXdAN/component
import FooterSection from "../../FooterSection"; // plasmic-import: nGsC6Y1BsR3DqYF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_deka_cell.module.css"; // plasmic-import: 5W4T71ZWGdu6kYqLvuuQ3N/projectcss
import sty from "./PlasmicTentang.module.css"; // plasmic-import: BJiRoLYqOBm/css

createPlasmicElementProxy;

export type PlasmicTentang__VariantMembers = {};
export type PlasmicTentang__VariantsArgs = {};
type VariantPropType = keyof PlasmicTentang__VariantsArgs;
export const PlasmicTentang__VariantProps = new Array<VariantPropType>();

export type PlasmicTentang__ArgsType = {};
type ArgPropType = keyof PlasmicTentang__ArgsType;
export const PlasmicTentang__ArgProps = new Array<ArgPropType>();

export type PlasmicTentang__OverridesType = {
  root?: p.Flex<"dd">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  foreground2?: p.Flex<"dl">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  kolomKontak?: p.Flex<typeof KolomKontak>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultTentangProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTentang__RenderFunc(props: {
  variants: PlasmicTentang__VariantsArgs;
  args: PlasmicTentang__ArgsType;
  overrides: PlasmicTentang__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicTentang.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTentang.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTentang.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicTentang.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicTentang.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicTentang.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicTentang.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicTentang.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <dd
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qnQ3E)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Tentang Kami"}
              </h1>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__ahxkZ
                )}
              >
                {"DekaCell Pekalongan"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nf5K2
                )}
              >
                {
                  "Kami DekaCell Pekalongan memperbaiki beberapa masalah kerusakan hardware HP di Pekalongan seperti"
                }
              </div>
            </p.Stack>
            <p.Stack
              as={"dl"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__uwu67)}
                description={
                  "Dekacell Pekalongan berdiri Sejak 2019 di Kota Pekalongan"
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___6SulB)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: "/plasmic/deka_cell/images/chart.png",
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"berdiri untuk melayani sejak 2019"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__itYqB)}
                description={
                  "Kami bisa menangani berbagai macam jenis HP android dan iPhone anda, jangan khawatir pasti bisa dibetulkan oleh DekaCell"
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__mFzvv)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: "/plasmic/deka_cell/images/sparkle.png",
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Berbagai Jenis HP android dan iPhone"}
              />
            </p.Stack>
          </p.Stack>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iRtt)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qlImc)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__rHsyC
                    )}
                  >
                    {"Hubungi Kami"}
                  </h2>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bvOns
                  )}
                >
                  {"Kami bantu kembalikan HP Anda ke Kondisi Prima"}
                </div>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wKxEp)}
              >
                <KolomKontak
                  data-plasmic-name={"kolomKontak"}
                  data-plasmic-override={overrides.kolomKontak}
                  className={classNames("__wab_instance", sty.kolomKontak)}
                />
              </p.Stack>
            </p.Stack>
          </section>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </dd>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "h1",
    "foreground2",
    "section",
    "foreground3",
    "kolomKontak",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground", "h1"],
  h1: ["h1"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "kolomKontak"],
  foreground3: ["foreground3", "kolomKontak"],
  kolomKontak: ["kolomKontak"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "dd";
  navbar: typeof Navbar;
  foreground: "div";
  h1: "h1";
  foreground2: "dl";
  section: "section";
  foreground3: "div";
  kolomKontak: typeof KolomKontak;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTentang__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTentang__VariantsArgs;
    args?: PlasmicTentang__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTentang__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTentang__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTentang__ArgProps,
          internalVariantPropNames: PlasmicTentang__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTentang__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTentang";
  } else {
    func.displayName = `PlasmicTentang.${nodeName}`;
  }
  return func;
}

export const PlasmicTentang = Object.assign(
  // Top-level PlasmicTentang renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    h1: makeNodeComponent("h1"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    kolomKontak: makeNodeComponent("kolomKontak"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicTentang
    internalVariantProps: PlasmicTentang__VariantProps,
    internalArgProps: PlasmicTentang__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Tentang DekaCell : Servis HP Pekalongan",
      description: "Detail Tentang DekaCell : Servis HP Pekalongan",
      ogImageSrc:
        "https://site-assets.plasmic.app/a45f41a2623d782ebc255f89f40b0f2f.jpg",
      canonical: ""
    }
  }
);

export default PlasmicTentang;
/* prettier-ignore-end */
