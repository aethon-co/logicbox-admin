import { useQuery } from '@tanstack/react-query';
import { getCandidatesTradetalk } from '../../api/candidates';
import CandidatesTable from './components/CandidatesTable';

const HomeTradetalk = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['candidates-tradetalk'],
        queryFn: getCandidatesTradetalk,
    });

    return (
        <CandidatesTable
            data={data}
            isLoading={isLoading}
            error={error}
            title="Tradetalk Candidates"
        />
    );
};

export default HomeTradetalk;
