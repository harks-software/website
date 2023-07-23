export interface Props {
  colour?: string;
}

export const Bullet = ({ colour }: Props) => (
  <div className="mt-[5px] mr-3 inline-block">
    <svg
      className={colour}
      preserveAspectRatio="none"
      data-bbox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 200 200"
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
      </g>
    </svg>
  </div>
);
