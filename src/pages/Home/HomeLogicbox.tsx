import { useQuery } from '@tanstack/react-query';
import { getCandidatesLogicbox } from '../../api/candidates';
import CandidatesTable from './components/CandidatesTable';

const HomeLogicbox = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['candidates-logicbox'],
        queryFn: getCandidatesLogicbox,
    });

    return (
        <CandidatesTable
            data={data}
            isLoading={isLoading}
            error={error}
            title="Logicbox Candidates"
        />
    );
};

export default HomeLogicbox;
