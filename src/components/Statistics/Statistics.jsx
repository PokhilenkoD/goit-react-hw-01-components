import PropTypes from 'prop-types';
import { Section, StatItem, StatList, Title, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

  return (
    <Section>
      {title.length ? <Title>{title}</Title> : null}

      <StatList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}