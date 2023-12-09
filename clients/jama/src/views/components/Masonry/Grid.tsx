import type { MasonryGridProps } from "@typings/index";
import {  rowsSx, gapSx, orderSx, columnsSx, columnSpanSx } from "@styles/index";
import { classSet } from "@/controllers/utils";


export function defaultSx() {
  return `grid`
}

export default function Grid({
  grid,
  children,
}: { grid: MasonryGridProps } & { children: React.ReactNode }) {
  
  const { columns, rows, gap, span, order } = grid;

  return (
    <div
      className={classSet([
        rowsSx(rows),
        gapSx(gap),
        orderSx(order),
        columnSpanSx(span),
        columnsSx(columns),
        defaultSx()
      ])}
    >
      {children}
    </div>
  );
}
