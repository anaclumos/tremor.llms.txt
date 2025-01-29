import type { SVGProps } from "react"
import {
  RiBarChartFill,
  RiBubbleChartFill,
  RiDonutChartFill,
  RiLineChartLine,
} from "@remixicon/react"

import { cx } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/atom/Select"
import { Tooltip } from "@/atom/Tooltip"

const BarChartThumbnail = (props: SVGProps<SVGSVGElement>) => (
  // array-start
  <svg className="h-14 w-full" fill="none" viewBox="0 0 133 53" {...props}>
    <line x2={133} y1={0.625} y2={0.625} stroke="#374151" strokeWidth={0.75} />
    <line
      x2={133}
      y1={26.625}
      y2={26.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <line
      x2={133}
      y1={52.625}
      y2={52.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <rect
      width={14.5062}
      height={41.3636}
      x={5}
      y={11.0908}
      fill="url(#paint0_linear_9395_3596)"
    />
    <rect
      width={14.509}
      height={47.9711}
      x={26.5459}
      y={4.4834}
      fill="url(#paint1_linear_9395_3596)"
    />
    <rect
      width={14.509}
      height={37.8719}
      x={48.0908}
      y={14.5825}
      fill="url(#paint2_linear_9395_3596)"
    />
    <rect
      width={14.509}
      height={47.9711}
      x={69.6377}
      y={4.4834}
      fill="url(#paint3_linear_9395_3596)"
    />
    <rect
      width={14.6429}
      height={37.8182}
      x={90.9043}
      y={14.6362}
      fill="url(#paint4_linear_9395_3596)"
    />
    <rect
      width={14.6429}
      height={48.4545}
      x={113.356}
      y={4}
      fill="url(#paint5_linear_9395_3596)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_9395_3596"
        x1={12.2531}
        x2={12.2531}
        y1={11.0908}
        y2={52.4544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9395_3596"
        x1={33.8004}
        x2={33.8004}
        y1={4.4834}
        y2={52.4545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_9395_3596"
        x1={55.3453}
        x2={55.3453}
        y1={14.5825}
        y2={52.4544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_9395_3596"
        x1={76.8922}
        x2={76.8922}
        y1={4.4834}
        y2={52.4545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_9395_3596"
        x1={98.2257}
        x2={98.2257}
        y1={14.6362}
        y2={52.4544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_9395_3596"
        x1={120.678}
        x2={120.678}
        y1={4}
        y2={52.4545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
    </defs>
  </svg>
  // array-end
)

const LineChartThumbnail = (props: SVGProps<SVGSVGElement>) => (
  // array-start
  <svg fill="none" viewBox="0 0 133 53" {...props}>
    <line x2={133} y1={0.625} y2={0.625} stroke="#374151" strokeWidth={0.75} />
    <line
      x2={133}
      y1={26.625}
      y2={26.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <line
      x2={133}
      y1={52.625}
      y2={52.625}
      stroke="#374151"
      strokeWidth={0.75}
    />
    <path
      stroke="url(#paint0_linear_9395_3661)"
      strokeWidth={1.5}
      d="M5 25.2105L6.75153 26.4229C6.80427 26.4594 6.842 26.5138 6.85772 26.576L8.61604 33.5308C8.64581 33.6485 8.75175 33.731 8.8732 33.731H10.4172C10.4711 33.731 10.5238 33.7474 10.5681 33.7781L12.1824 34.8955C12.2732 34.9584 12.3935 34.9584 12.4843 34.8955L14.0804 33.7907C14.1358 33.7523 14.1746 33.6943 14.1887 33.6284L15.9549 25.42C15.9812 25.2978 16.0893 25.2105 16.2142 25.2105H17.8333L19.4678 25.0489C19.5855 25.0373 19.6805 24.9493 19.7088 24.8344C19.9968 23.6677 21.0234 21.8591 21.5 21.5848C21.9854 21.3055 22.5543 27.6157 23.2522 27.5981C23.309 27.5967 23.3638 27.5673 23.4206 27.5673C23.6377 27.5673 24.2392 27.5673 25.1667 27.5673C26.241 27.5673 26.501 27.5673 26.9271 27.5673C26.9747 27.5673 27.0216 27.5801 27.0626 27.6044L28.7708 28.6178C28.8117 28.6421 28.8585 28.655 28.9061 28.655H30.6085C30.6468 28.655 30.6849 28.6468 30.7193 28.63C31.4731 28.2601 31.8841 27.5673 32.5 27.5673C33.0815 27.5673 33.3909 27.5673 34.1368 27.5673C34.2534 27.5673 34.3567 27.4912 34.3908 27.3797L36.1667 21.5848L37.7965 15.1381C37.8599 14.8877 38.2073 14.8662 38.3009 15.1069L39.821 19.0151C39.8292 19.0361 39.84 19.056 39.8532 19.0743L41.6667 21.5848L43.5 24.1228L45.3333 27.5673L47.0873 29.9953C47.1371 30.0644 47.2171 30.1053 47.3023 30.1053H48.8644C48.9496 30.1053 49.0295 30.0644 49.0794 29.9953L50.7019 27.7492C50.7778 27.6442 50.9184 27.6093 51.0345 27.6667L52.6667 28.4737L54.2203 29.2418C54.3669 29.3143 54.5435 29.2381 54.5914 29.0818L56.3333 23.3977L58.151 19.0839C58.1614 19.0593 58.1754 19.0364 58.1926 19.016L59.6556 17.28C59.7969 17.1123 60.0691 17.1788 60.1172 17.3928L61.6928 24.4039C61.7446 24.6345 62.0495 24.6872 62.1758 24.4874L63.5886 22.2522C63.6372 22.1753 63.7218 22.1287 63.8128 22.1287H65.4494C65.4828 22.1287 65.5159 22.1223 65.547 22.1101L67.2569 21.4337C67.3067 21.414 67.3494 21.3798 67.3793 21.3354L69.1273 18.7425C69.1531 18.7043 69.1884 18.6735 69.2297 18.653L70.7859 17.8837C70.9076 17.8235 71.0551 17.8649 71.1276 17.9797L72.7552 20.5548C72.8039 20.6317 72.8885 20.6784 72.9795 20.6784H74.537C74.6188 20.6784 74.6961 20.7161 74.7463 20.7807L76.4204 22.9327C76.4706 22.9973 76.5479 23.0351 76.6297 23.0351H78.3333H80.0939C80.1415 23.0351 80.1883 23.0479 80.2292 23.0722L81.6738 23.9293C81.8322 24.0233 82.0359 23.9311 82.0698 23.75L83.7928 14.5498C83.8163 14.4243 83.9259 14.3333 84.0535 14.3333H85.5838C85.6378 14.3333 85.6904 14.3498 85.7348 14.3805L87.5 15.6023L89.1824 16.7668C89.2732 16.8297 89.3935 16.8297 89.4843 16.7668L91.0157 15.7068C91.1065 15.644 91.2268 15.644 91.3176 15.7068L92.9709 16.8512C92.9902 16.8646 93.0077 16.8804 93.0228 16.8984L94.7538 18.9525C94.8042 19.0123 94.8785 19.0468 94.9567 19.0468H96.4852C96.5946 19.0468 96.6928 18.9796 96.7324 18.8777L98.4877 14.365C98.4959 14.344 98.5067 14.3241 98.5199 14.3058L100.333 11.7953L102.167 8.53216L103.961 6.04746C103.987 6.01245 104.02 5.98414 104.059 5.965L105.833 5.08772L107.401 4.15751C107.541 4.07464 107.722 4.13561 107.782 4.28616L109.433 8.36638C109.473 8.46658 109.571 8.53216 109.679 8.53216H111.12C111.245 8.53216 111.352 8.61881 111.379 8.74046L113.121 16.663C113.148 16.7847 113.255 16.8713 113.38 16.8713H114.877C114.955 16.8713 115.029 16.9059 115.08 16.9657L116.833 19.0468L118.587 21.4749C118.637 21.5439 118.717 21.5848 118.802 21.5848H120.438C120.479 21.5848 120.519 21.5754 120.556 21.5573L122.278 20.7058C122.314 20.6878 122.355 20.6784 122.395 20.6784H124.026C124.114 20.6784 124.196 20.6345 124.246 20.5614L126 17.9591"
    />
    <path
      stroke="url(#paint1_linear_9395_3661)"
      strokeWidth={1.5}
      d="M127.073 35H125.321C125.243 35 125.171 35.0415 125.132 35.1089L123.38 38.1324C123.341 38.1999 123.269 38.2414 123.191 38.2414H121.458C121.446 38.2414 121.433 38.2403 121.42 38.238C120.77 38.1203 119.851 37.846 119.561 37.6626C119.284 37.4872 118.213 37.5747 117.755 37.65C117.708 37.6577 117.66 37.6512 117.617 37.6302L115.873 36.7702C115.829 36.7483 115.779 36.7422 115.73 36.7527L113.95 37.14C113.935 37.1433 113.919 37.1449 113.903 37.1449C112.902 37.1449 112.437 37.1449 112.049 37.1449C111.666 37.1449 110.739 37.1449 110.203 37.1449C110.182 37.1449 110.16 37.1482 110.139 37.1546L108.324 37.7141C108.303 37.7205 108.282 37.7238 108.26 37.7238H106.454C106.428 37.7238 106.402 37.7284 106.378 37.7373L104.678 38.3662C104.593 38.3976 104.497 38.3733 104.438 38.3052L102.791 36.4247C102.716 36.3392 102.588 36.3254 102.497 36.393L100.838 37.6197C100.801 37.6475 100.755 37.6626 100.709 37.6626H98.9696C98.9259 37.6626 98.8832 37.6757 98.847 37.7002L97.0593 38.9124C97.0363 38.928 97.0165 38.9478 97.0009 38.9708L95.1788 41.6663C95.1576 41.6978 95.1285 41.7231 95.0945 41.7399L93.365 42.5928C93.3041 42.6228 93.2327 42.6228 93.1718 42.5928L91.436 41.7368C91.4059 41.722 91.3729 41.7143 91.3394 41.7143H89.5793C89.5356 41.7143 89.4929 41.7012 89.4567 41.6767L87.6586 40.4574C87.6424 40.4465 87.6278 40.4334 87.6151 40.4185L85.7973 38.2896C85.7705 38.2581 85.7351 38.2349 85.6956 38.2227L83.9137 37.6735C83.8902 37.6663 83.868 37.6551 83.8482 37.6404L82.058 36.3162C82.0204 36.2884 81.9748 36.2734 81.9281 36.2734C81.2536 36.2734 80.4993 36.2734 80.122 36.2734C79.7597 36.2734 78.7696 35.3916 78.3353 35.2634C78.2781 35.2464 78.2207 35.2723 78.1794 35.3155L76.3659 37.2159L74.5533 39.3388C74.5118 39.3874 74.4511 39.4154 74.3872 39.4154H72.7013C72.6428 39.4154 72.5867 39.4389 72.5457 39.4805L70.75 41.3037C70.7379 41.316 70.7273 41.3296 70.7184 41.3444L68.947 44.2927C68.8929 44.3827 68.7824 44.4214 68.6839 44.385L67.0476 43.7798C67.0011 43.7626 66.9617 43.73 66.9362 43.6875L65.1613 40.7335C65.1218 40.6678 65.0507 40.6276 64.974 40.6276H63.2587C63.2328 40.6276 63.2072 40.6322 63.1829 40.6411L61.5113 41.2594C61.4128 41.2958 61.3024 41.257 61.2483 41.167L59.4965 38.2515C59.475 38.2156 59.4435 38.1867 59.4059 38.1681L57.5854 37.2704L55.83 36.0801C55.756 36.0299 55.6588 36.0299 55.5848 36.0801L53.8719 37.2415C53.8439 37.2605 53.8211 37.2855 53.8036 37.3145C53.4467 37.907 52.3324 39.0323 51.9513 39.1226C51.5752 39.2118 50.6736 40.0945 50.1346 40.5735C50.095 40.6086 50.0441 40.6276 49.9912 40.6276H48.1952H46.3842C46.3405 40.6276 46.2978 40.6407 46.2616 40.6652L44.5826 41.8037C44.4986 41.8607 44.3863 41.8522 44.3118 41.7833L42.561 40.1645L40.7475 38.2642C40.7063 38.221 40.6492 38.1965 40.5895 38.1965H38.8559C38.8224 38.1965 38.7893 38.1888 38.7593 38.174L37.0663 37.3391C36.9828 37.298 36.8825 37.3142 36.8163 37.3795L35.1126 39.0597C35.0718 39.1 35.0167 39.1226 34.9593 39.1226H33.2273C33.1903 39.1226 33.1538 39.1321 33.1214 39.1501L31.3422 40.1371C31.3098 40.1551 31.2733 40.1645 31.2362 40.1645H29.4147H27.6527C27.5801 40.1645 27.5123 40.2005 27.4717 40.2606L25.7236 42.8468C25.683 42.9069 25.6151 42.9429 25.5426 42.9429H23.8938C23.8228 42.9429 23.7562 42.9774 23.7153 43.0354L22.0209 45.4377C21.9543 45.532 21.826 45.5583 21.7277 45.4977L20.0245 44.4478L18.1464 42.9429L16.4111 41.4453C16.3291 41.3746 16.2076 41.3746 16.1256 41.4453L14.4518 42.8898C14.4121 42.924 14.3615 42.9429 14.3091 42.9429H12.5574C12.5276 42.9429 12.4982 42.949 12.4708 42.9608L10.7693 43.6949C10.6877 43.7302 10.5928 43.7124 10.5294 43.6499L8.78151 41.926C8.76472 41.9094 8.75073 41.8903 8.74007 41.8692L6.93879 38.3162C6.90157 38.2428 6.82626 38.1965 6.74395 38.1965H5.00007"
    />
    <path stroke="#4B5563" strokeWidth={0.75} d="M117 1V52" />
    <g filter="url(#filter0_d_9395_3661)">
      <circle cx={117} cy={19} r={3} fill="#3B82F6" />
      <circle cx={117} cy={19} r={2.4} stroke="#E5E7EB" strokeWidth={1.2} />
    </g>
    <g filter="url(#filter1_d_9395_3661)">
      <circle cx={117} cy={37} r={3} fill="#6B7280" />
      <circle cx={117} cy={37} r={2.4} stroke="#E5E7EB" strokeWidth={1.2} />
    </g>
    <defs>
      <filter
        id="filter0_d_9395_3661"
        width={10.8}
        height={10.8}
        x={111.6}
        y={16}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.4} />
        <feGaussianBlur stdDeviation={1.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3661"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9395_3661"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_9395_3661"
        width={10.8}
        height={10.8}
        x={111.6}
        y={34}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.4} />
        <feGaussianBlur stdDeviation={1.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3661"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9395_3661"
          mode="normal"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_9395_3661"
        x1={112.425}
        x2={15.9943}
        y1={11.75}
        y2={38.8582}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9395_3661"
        x1={1}
        x2={127}
        y1={41.5}
        y2={37.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#16171A" />
        <stop offset={0.4} stopColor="#6B7280" />
      </linearGradient>
    </defs>
  </svg>
  // array-end
)

const DonutChartThumbnail = (props: SVGProps<SVGSVGElement>) => (
  // array-start
  <svg fill="none" viewBox="0 0 133 52" {...props}>
    <g clipPath="url(#clip0_9395_3799)">
      <path
        fill="#BFDBFE"
        d="M41.0111 24.8516C41.2112 18.0634 44.0997 11.6328 49.0412 6.97425C53.9826 2.31575 60.5723 -0.188968 67.3605 0.0111158L67.0813 9.48125C62.8048 9.35519 58.6533 10.9332 55.5402 13.868C52.427 16.8029 50.6073 20.8542 50.4812 25.1308L41.0111 24.8516Z"
      />
      <path
        fill="#93C5FD"
        d="M41.1932 28.7456C40.6419 24.2835 41.2753 19.755 43.0295 15.6153C44.7837 11.4756 47.597 7.87079 51.1864 5.16334L56.8917 12.7271C54.6303 14.4328 52.858 16.7039 51.7528 19.3119C50.6477 21.9199 50.2487 24.7729 50.596 27.584L41.1932 28.7456Z"
      />
      <path
        fill="url(#paint0_linear_9395_3799)"
        d="M81.3732 46.525C77.5559 49.2197 73.074 50.8185 68.4131 51.1483C63.7521 51.478 59.0898 50.5261 54.9311 48.3957C50.7725 46.2652 47.2761 43.0375 44.8206 39.0621C42.3652 35.0867 41.0443 30.5152 41.0011 25.8428L50.4749 25.7552C50.5021 28.6988 51.3343 31.5788 52.8812 34.0834C54.4282 36.5879 56.6309 38.6213 59.2509 39.9635C61.8708 41.3057 64.8081 41.9054 67.7445 41.6977C70.6809 41.4899 73.5045 40.4827 75.9093 38.785L81.3732 46.525Z"
      />
      <path
        fill="url(#paint1_linear_9395_3799)"
        d="M66.6061 0C70.1526 4.22926e-08 73.6606 0.736748 76.9075 2.16355C80.1544 3.59035 83.0695 5.67609 85.4681 8.28859C87.8666 10.9011 89.6963 13.9834 90.8412 17.3401C91.9861 20.6968 92.4212 24.2547 92.119 27.7884C91.8167 31.3221 90.7837 34.7544 89.0853 37.8679C87.387 40.9814 85.0604 43.7082 82.253 45.8754C79.4456 48.0425 76.2186 49.6029 72.7765 50.4575C69.3344 51.3122 65.7524 51.4425 62.2573 50.8401L63.8677 41.4957C66.0685 41.8749 68.3241 41.7929 70.4915 41.2547C72.6589 40.7166 74.6909 39.734 76.4587 38.3694C78.2265 37.0047 79.6916 35.2877 80.761 33.3272C81.8304 31.3667 82.4809 29.2054 82.6712 26.9802C82.8616 24.7551 82.5876 22.5147 81.8667 20.4011C81.1457 18.2874 79.9936 16.3465 78.4832 14.7015C76.9729 13.0564 75.1373 11.743 73.0927 10.8446C71.0482 9.94615 68.8393 9.48223 66.6061 9.48223L66.6061 0Z"
      />
      <g filter="url(#filter0_ddd_9395_3799)">
        <path
          fill="white"
          d="M72 21.5606C72 20.1464 73.1464 19 74.5606 19H104.894C106.308 19 107.455 20.1464 107.455 21.5606V28.1919C107.455 29.6061 106.308 30.7525 104.894 30.7525H74.5606C73.1464 30.7525 72 29.6061 72 28.1919V21.5606Z"
        />
        <path
          stroke="#E5E7EB"
          strokeWidth={0.320076}
          d="M74.5606 19.16H104.894C106.22 19.16 107.295 20.2348 107.295 21.5606V28.1919C107.295 29.5177 106.22 30.5925 104.894 30.5925H74.5606C73.2348 30.5925 72.16 29.5177 72.16 28.1919V21.5606C72.16 20.2348 73.2348 19.16 74.5606 19.16Z"
        />
        <g filter="url(#filter1_dd_9395_3799)">
          <circle cx={77.1211} cy={24.876} r={1.70707} fill="#3B82F6" />
          <circle
            cx={77.1211}
            cy={24.876}
            r={2.13384}
            stroke="white"
            strokeWidth={0.853535}
          />
        </g>
        <rect
          width={21.3712}
          height={4.92424}
          x={82.6689}
          y={22.4141}
          fill="url(#paint2_linear_9395_3799)"
          rx={0.853535}
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ddd_9395_3799"
        width={82.7268}
        height={59.0252}
        x={48.3636}
        y={11.1212}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.492424} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3799"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.9697} />
        <feGaussianBlur stdDeviation={2.95455} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend
          in2="effect1_dropShadow_9395_3799"
          mode="normal"
          result="effect2_dropShadow_9395_3799"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={15.7576} />
        <feGaussianBlur stdDeviation={11.8182} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          in2="effect2_dropShadow_9395_3799"
          mode="normal"
          result="effect3_dropShadow_9395_3799"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_9395_3799"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_dd_9395_3799"
        width={7.6817}
        height={7.6817}
        x={73.2802}
        y={21.4619}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.426768} />
        <feGaussianBlur stdDeviation={0.640152} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_9395_3799"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="erode"
          radius={0.426768}
          result="effect2_dropShadow_9395_3799"
        />
        <feOffset dy={0.426768} />
        <feGaussianBlur stdDeviation={0.426768} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="effect1_dropShadow_9395_3799"
          mode="normal"
          result="effect2_dropShadow_9395_3799"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_9395_3799"
          mode="normal"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_9395_3799"
        x1={45.8773}
        x2={66.6061}
        y1={25.6061}
        y2={51.2121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#60A5FA" />
        <stop offset={1} stopColor="#396294" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9395_3799"
        x1={66.6061}
        x2={66.6061}
        y1={0}
        y2={51.2121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset={1} stopColor="#234C90" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_9395_3799"
        x1={82.6689}
        x2={104.04}
        y1={24.8762}
        y2={24.8762}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E5E7EB" />
        <stop offset={1} stopColor="#E5E7EB" stopOpacity={0.25} />
      </linearGradient>
      <clipPath id="clip0_9395_3799">
        <rect width={133} height={52} fill="white" />
      </clipPath>
    </defs>
  </svg>
  // array-end
)

const data = [
  // array-start
  {
    value: "line-chart",
    label: "Line chart",
    icon: RiLineChartLine,
    thumbnail: <LineChartThumbnail />,
    description: "Best to show trends or changes over time",
    disabled: false,
  },
  {
    value: "bar-chart",
    label: "Bar chart",
    icon: RiBarChartFill,
    thumbnail: <BarChartThumbnail />,
    description: "Best to display comparisons between categories",
    disabled: false,
  },
  {
    value: "donut-chart",
    label: "Donut chart",
    icon: RiDonutChartFill,
    thumbnail: <DonutChartThumbnail />,
    description: "Display data through a circular visualization",
    disabled: false,
  },
  {
    value: "scatter-chart",
    label: "Scatter chart",
    icon: RiBubbleChartFill,
    thumbnail: null,
    description: "Display data through a circular visualization",
    disabled: true,
  },
  // array-end
]

function TooltipContent({
  thumbnail,
  description,
}: {
  thumbnail: React.ReactNode
  description: string
}) {
  return (
    <div>
      <div className="p-1">{thumbnail}</div>
      <p className="mt-1 text-xs">{description}</p>
    </div>
  )
}

export default function Example() {
  return (
    <div className="obfuscate">
      <div className="relative">
        <div className="flex h-48 items-start justify-end rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Select defaultValue="line-chart">
            <SelectTrigger className="border-gray-300 sm:w-48 dark:border-gray-800">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="border-gray-200 dark:border-gray-800">
              {data.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  <Tooltip
                    sideOffset={15}
                    delayDuration={0}
                    side="left"
                    showArrow={true}
                    className="z-50 max-w-40"
                    content={
                      <TooltipContent
                        thumbnail={item.thumbnail}
                        description={item.description}
                      />
                    }
                    triggerAsChild={true}
                  >
                    <div className="flex w-full items-center gap-x-2">
                      <item.icon
                        className={cx(
                          item.disabled ? "text-gray-400/50" : "text-gray-500",
                          "size-4 shrink-0",
                        )}
                        aria-hidden={true}
                      />
                      {item.label}
                    </div>
                  </Tooltip>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* gradient for demo purpose */}
        <div className="absolute inset-x-0 bottom-0 -mb-1 h-14 rounded-b-lg bg-gradient-to-t from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent" />
      </div>
    </div>
  )
}
