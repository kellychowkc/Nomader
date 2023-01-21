import { HStack, Switch, FormControl, FormLabel } from '@chakra-ui/react'
import type { Permission } from './ManageUser'

type Props = {
    permissions: Permission[]
    changePermission: (name: string) => void
}

export default function PermissionSetting(permissionProps: Props) {
    return (
        <>
            {permissionProps.permissions.map(
                (permission: Permission, idx: number) => (
                    <HStack key={idx} w="90%" px="5px" py="3px">
                        <FormControl
                            display="flex"
                            justifyContent={'space-between'}
                        >
                            <FormLabel htmlFor="visibleByOthers" mb="0">
                                {permission.displayName}
                            </FormLabel>
                            <Switch
                                id={'permission_' + permission.name}
                                colorScheme="teal"
                                size="md"
                                isChecked={permission.value}
                                defaultChecked={permission.value}
                                onChange={() =>
                                    permissionProps.changePermission(
                                        permission.name
                                    )
                                }
                            />
                        </FormControl>
                    </HStack>
                )
            )}
        </>
    )
}
