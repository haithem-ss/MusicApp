import { useQuery } from '@tanstack/react-query'
import { SortSongFields, SortSongOrder, getAll } from 'react-native-get-music-files';
import { PERMISSIONS, request } from 'react-native-permissions';


export const useAlbums = () => {
    return useQuery({
        queryKey: ['albums'], queryFn: async () => {
            await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
            const songsOrError = await getAll({
                limit: 20,
                offset: 0,
                coverQuality: 50,
                minSongDuration: 1000,
                sortBy: SortSongFields.TITLE,
                sortOrder: SortSongOrder.DESC,
            });
            if (typeof songsOrError === 'string') {
                return [];
            }
            return songsOrError;
        }
    });
}
