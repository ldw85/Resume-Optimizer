import express from 'express';
import { supabase } from '../services/supabaseClient'; // 导入 Supabase 客户端

const router = express.Router();

router.post('/register-info', async (req, res) => {
  try {
    const { clerkUserId, email } = req.body;

    if (!clerkUserId) {
      return res.status(400).json({ message: 'clerkUserId is required' });
    }

    // 检查用户是否已存在，避免重复插入
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('id')
      .eq('clerk_user_id', clerkUserId)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 indicates no rows found
      console.error('Error checking existing user:', fetchError);
      throw new Error('Error checking existing user');
    }

    if (existingUser) {
      // 用户已存在，可能不需要做任何事情或返回现有用户信息
      console.log(`User with clerkUserId ${clerkUserId} already exists.`);
      return res.status(200).json({ message: 'User already registered' });
    }

    // 插入新的用户信息
    const { data, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          clerk_user_id: clerkUserId,
          email: email,
          // created_at 会自动填充
        },
      ])
      .select(); // 选择插入的数据以返回

    if (insertError) {
      console.error('Error inserting user:', insertError);
      throw new Error('Error saving user information');
    }

    res.status(201).json(data[0]); // 返回新创建的用户信息

  } catch (error: any) {
    console.error('POST /api/user/register-info error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
});

export default router ;
