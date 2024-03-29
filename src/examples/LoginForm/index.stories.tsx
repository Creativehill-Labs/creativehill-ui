import { ComponentMeta } from '@storybook/react';
import React from 'react';
import {
  Box,
  Button,
  Card,
  Text,
  TextField,
  CardContent,
  CardHeader,
} from '../..';

import Checkbox from '../../components/Checkbox/Checkbox';
import Flex from '../../components/Flex/Flex';
import FormControl from '../../components/FormControl/FormControl';
import FormControlLabel from '../../components/FormControlLabel/FormControlLabel';

export default {
  title: `Examples/LoginForm`,
} as ComponentMeta<typeof Box>;

export const Default = () => (
  <Flex height="100vh" justifyContent="center" alignItems="center">
    <Card minWidth="420px" pb="40px">
      <CardHeader px={4} py={5}>
        <Text variant="h4" color="primary" as="div" mb="8px">
          로그인
        </Text>
        <Text variant="subtitle" color="dark1" as="div">
          회원 서비스 이용을 위해 로그인 해주세요.
        </Text>
      </CardHeader>
      <CardContent px={4}>
        <form>
          <Box>
            <FormControl
              control={<TextField placeholder="아이디를 입력해주세요." />}
              mb="16px"
            />
            <FormControl
              control={
                <TextField
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              }
              mb="16px"
            />
            <FormControlLabel
              mb="32px"
              control={<Checkbox />}
              label="로그인 상태 유지"
            />
            <FormControl control={<Button fullWidth>로그인</Button>} />
          </Box>
        </form>
        <Flex justifyContent="space-around" mt="32px">
          <Text variant="p2" color="dark1">
            회원가입
          </Text>
          <Text variant="p2" color="dark1">
            비밀번호 찾기
          </Text>
        </Flex>
      </CardContent>
    </Card>
  </Flex>
);
