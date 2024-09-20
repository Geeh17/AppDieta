import { 
  View, 
  Text,  
  StyleSheet, 
  Pressable, 
  ScrollView
 } from 'react-native'
import { colors } from '../../constants/colors'

import { z } from 'zod'
import { router } from 'expo-router'


const schema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório"}),
  weight: z.string().min(1, { message: "O peso é obrigatório"}),
  age: z.string().min(1, { message: "A idade é obrigatória"}),
  height: z.string().min(1, { message: "A altura é obrigatória"}),
})

type FormData = z.infer<typeof schema>


