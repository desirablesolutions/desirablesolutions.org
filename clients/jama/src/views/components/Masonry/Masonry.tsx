"use client";

import Container from "@components/Masonry/Container";
import Grid from "@components/Masonry/Grid";
import { Templates } from "@components/Masonry/Templates";
import Reanimator from "@components/Reanimator";
import type {
  MasonryGridProps,
  MasonryItemProps,
  MasonryProps,
} from "@typings/index";
import type { Weak } from "blakprint";

import { arrayExists, tuid } from "@utils/index";

export function defaultProps(): MasonryProps {
  return {
    grids: [],
    items: [],
    container: {
      columns: 3,
      rows: 1,
      gap: 4,
    },
  };
}

export function renderItems(items: Weak<MasonryItemProps[]>) {
  if (!arrayExists(items)) {
    return null;
  } else {
    return (
      <>
        {items?.map((item) => {
          const SelectedTemplate =
            Templates[item.type as keyof typeof Templates];
          return SelectedTemplate({ item: item });
        })}
      </>
    );
  }
}

export function renderGrids(grids: Weak<MasonryGridProps[]>) {
  if (!arrayExists(grids)) {
    return <>No Grids</>;
  } else {
    return (
      <>
        {grids?.map((grid: MasonryGridProps) => {
          return (
            <Grid grid={grid} key={tuid()}>
              {arrayExists(grid?.grids)
                ? renderGrids(grid?.grids)
                : renderItems(grid?.items)}
            </Grid>
          );
        })}
      </>
    );
  }
}

/**
 * Generates a CSS class string for setting the number of rows in a grid.
 *
 * @param {number} rows - The number of rows in the grid. If not provided, defaults to 1.
 * @return {string} The generated CSS class string.
 */

export default function Masonry({ masonry }: { masonry: MasonryProps }) {
  const { grids, items, container } = !masonry
    ? defaultProps()
    : (masonry as MasonryProps);

  return (
    <Container container={!container ? defaultProps().container : container}>
      {renderItems(items)}
      {renderGrids(grids)}
    </Container>
  );
}
