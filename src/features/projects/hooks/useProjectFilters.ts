import { useMemo, useState } from 'react';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import type { LocalizedProject } from '../types';
import {
    extractUniqueTechStacks,
    filterProjects,
} from '../utils/projectHelpers';


export function useProjectFilters(projects: LocalizedProject[]) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTech, setSelectedTech] = useState('All');

    const debouncedSearch = useDebounce(searchQuery, 250);

    const techStacks = useMemo(
        () => extractUniqueTechStacks(projects),
        [projects]
    );
    const filteredProjects = useMemo(
        () =>
            filterProjects(projects, {
                searchQuery: debouncedSearch,
                selectedTech,
            }),
        [projects, debouncedSearch, selectedTech]
    );

    const resetFilters = () => {
        setSearchQuery('');
        setSelectedTech('All');
    };

    return {
        searchQuery,
        setSearchQuery,
        selectedTech,
        setSelectedTech,
        techStacks,
        filteredProjects,
        resetFilters,
    };
}