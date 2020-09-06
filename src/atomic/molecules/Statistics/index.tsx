import React, { useMemo } from "react";
import { styled } from "config/theme";

export interface IStatisticsProps {
  className?: string;
  data: {
    label: string;
    value: string;
  }[];
}

const StatisticsComponent: React.FunctionComponent<IStatisticsProps> = ({
  className,
  data,
}) => {
  const statisticItems = useMemo(
    () =>
      data.map((item) => (
        <div key={item.label} className="sttistic-item">
          <div className="sttistic-item__value">{item.value}</div>
          <div className="sttistic-item__label">{item.label}</div>
        </div>
      )),
    [data]
  );

  return <div className={className}>{statisticItems}</div>;
};

export const Statistics = styled(StatisticsComponent)`
  display: flex;
  justify-content: flex-end;

  .sttistic-item {
    height: 44px;
    min-width: 110px;
    text-align: center;
    border-right: 1px solid ${(props) => props.theme.colors.mercury};
    padding: 0 10px;
    &:last-child {
      border-right: none;
    }

    &__value {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
    }
    &__label {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
