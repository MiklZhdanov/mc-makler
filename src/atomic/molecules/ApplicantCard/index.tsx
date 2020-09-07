import React, { useMemo } from "react";
import dayjs from "dayjs";
import randomcolor from "randomcolor";
import theme, { styled } from "config/theme";
import { ApplicantType } from "modules/applicants/types";
import { Status } from "atomic/atoms/Status";

export interface IApplicantCardProps {
  className?: string;
  applicant: ApplicantType;
}

export const getInitials = (applicant: ApplicantType): string =>
  `${applicant.first_name[0]}${applicant.last_name[0]}`.toUpperCase();

const ApplicantCardComponent: React.FunctionComponent<IApplicantCardProps> = ({
  className,
  applicant,
}) => {
  const logoStyle = useMemo(() => {
    const bgColor = randomcolor({
      luminosity: "dark",
      format: "rgba",
      alpha: 0.5,
    });
    return {
      background: applicant.logo ? `url(${applicant.logo})` : bgColor,
      color: bgColor,
    };
  }, [applicant.logo]);
  const initilas = useMemo(() => getInitials(applicant), [applicant]);
  return (
    <div className={className}>
      <div className="applicant-card__logo" style={logoStyle}>
        {initilas}
      </div>
      <div className="applicant-card__name">
        {`${applicant.first_name} ${applicant.last_name}`}
      </div>
      <a className="applicant-card__phone" href={`tel:${applicant.phone}`}>
        {applicant.phone}
      </a>
      <a className="applicant-card__email" href={`mailto:${applicant.email}`}>
        {applicant.email}
      </a>
      <div className="applicant-card__status">
        <Status
          text={`${applicant.status} ${dayjs(applicant.activity_at).format(
            "DD MMMM HH:mm"
          )}`}
        />
      </div>
      {applicant.bid && (
        <div className="applicant-card__bid">
          <Status
            text={`BID ${applicant.bid}€`}
            bgColor={theme.colors.selectiveYellow}
          />
        </div>
      )}
    </div>
  );
};

export const ApplicantCard = styled(ApplicantCardComponent)`
  border: 1px solid ${(props) => props.theme.colors.gallery};
  border-radius: 4px;
  padding: 16px;
  width: 305px;
  min-height: 241px;
  text-align: center;
  .applicant-card {
    &__logo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
    }
    &__name {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      margin-top: 8px;
    }
    &__phone {
      display: block;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: ${(props) => props.theme.colors.baseText};
    }
    &__email {
      display: block;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: ${(props) => props.theme.colors.baseText};
    }
  }
`;
