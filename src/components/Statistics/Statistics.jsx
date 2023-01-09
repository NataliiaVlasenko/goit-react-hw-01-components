
import PropTypes from 'prop-types';
import { StatTitle, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return( 
   <section>

{title && <StatTitle>{title}</StatTitle>}
        
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </section>
  );
};

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
    }