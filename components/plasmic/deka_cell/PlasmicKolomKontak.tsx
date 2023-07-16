// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5W4T71ZWGdu6kYqLvuuQ3N
// Component: yBAyndXdAN

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
import Button from "../../Button"; // plasmic-import: OZSqee0ES_HTq_B/component
import ButtonWa from "../../ButtonWa"; // plasmic-import: lC_mwoGu3T/component

import { useScreenVariants as useScreenVariantsqHr8XyK5HNLc7Z } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: QHr8XyK5hNLc7Z_/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_deka_cell.module.css"; // plasmic-import: 5W4T71ZWGdu6kYqLvuuQ3N/projectcss
import sty from "./PlasmicKolomKontak.module.css"; // plasmic-import: yBAyndXdAN/css

import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: wMBQ1XNz-iMYqFD/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: kKNkwOGnEhqtvD_/icon

createPlasmicElementProxy;

export type PlasmicKolomKontak__VariantMembers = {};
export type PlasmicKolomKontak__VariantsArgs = {};
type VariantPropType = keyof PlasmicKolomKontak__VariantsArgs;
export const PlasmicKolomKontak__VariantProps = new Array<VariantPropType>();

export type PlasmicKolomKontak__ArgsType = {};
type ArgPropType = keyof PlasmicKolomKontak__ArgsType;
export const PlasmicKolomKontak__ArgProps = new Array<ArgPropType>();

export type PlasmicKolomKontak__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  buttonWa?: p.Flex<typeof ButtonWa>;
};

export interface DefaultKolomKontakProps {
  className?: string;
}

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

function PlasmicKolomKontak__RenderFunc(props: {
  variants: PlasmicKolomKontak__VariantsArgs;
  args: PlasmicKolomKontak__ArgsType;
  overrides: PlasmicKolomKontak__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqHr8XyK5HNLc7Z()
  });

  return (
    <div
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
      <div className={classNames(projectcss.all, sty.column__nNwyT)}>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("white" as const)
              : ("white" as const)
          }
          link={"https://goo.gl/maps/Fu2U4jPByLEqKH656" as const}
          showStartIcon={true}
          startIcon={
            <TargetIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
          target={true}
        >
          {"Lihat Peta"}
        </Button>
      </div>
      <div className={classNames(projectcss.all, sty.column__po61N)}>
        <ButtonWa
          data-plasmic-name={"buttonWa"}
          data-plasmic-override={overrides.buttonWa}
          className={classNames("__wab_instance", sty.buttonWa)}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "svg", "buttonWa"],
  button: ["button", "svg"],
  svg: ["svg"],
  buttonWa: ["buttonWa"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
  svg: "svg";
  buttonWa: typeof ButtonWa;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicKolomKontak__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicKolomKontak__VariantsArgs;
    args?: PlasmicKolomKontak__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicKolomKontak__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicKolomKontak__ArgsType,
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
          internalArgPropNames: PlasmicKolomKontak__ArgProps,
          internalVariantPropNames: PlasmicKolomKontak__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicKolomKontak__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicKolomKontak";
  } else {
    func.displayName = `PlasmicKolomKontak.${nodeName}`;
  }
  return func;
}

export const PlasmicKolomKontak = Object.assign(
  // Top-level PlasmicKolomKontak renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    buttonWa: makeNodeComponent("buttonWa"),

    // Metadata about props expected for PlasmicKolomKontak
    internalVariantProps: PlasmicKolomKontak__VariantProps,
    internalArgProps: PlasmicKolomKontak__ArgProps
  }
);

export default PlasmicKolomKontak;
/* prettier-ignore-end */
