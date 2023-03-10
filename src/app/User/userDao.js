export const findUserById = async (client, id) => {
  const findUserByIdQuery = `SELECT * FROM users WHERE id = $1`; // id로 사용자 정보를 가져오는 쿼리문을 정의합니다.
  try {
    const userInfo = await client.query(findUserByIdQuery, [id]); // 쿼리문을 실행합니다.
    return userInfo.rows[0]; // 사용자 정보를 반환합니다.
  } catch (err) {
    console.error(err);
  }
};

export const findUserByEmail = async (client, email) => {
  const findUserByEmailQuery = `SELECT * FROM users WHERE email = $1`; // email로 사용자 정보를 가져오는 쿼리문을 정의합니다.
  try {
    const userInfo = await client.query(findUserByEmailQuery, [email]); // 쿼리문을 실행합니다.
    return userInfo.rows[0]; // 사용자 정보를 반환합니다.
  } catch (err) {
    console.error(err);
  }
};

export const findUserByNickname = async (client, nickname) => {
  const findUserByNicknameQuery = `SELECT * FROM users WHERE nickname = $1`; // nickname으로 사용자 정보를 가져오는 쿼리문을 정의합니다.
  try {
    const userInfo = await client.query(findUserByNicknameQuery, [nickname]); // 쿼리문을 실행합니다.
    return userInfo.rows[0]; // 사용자 정보를 반환합니다.
  } catch (err) {
    console.error(err);
  }
};

export const authenticateUser = async (client, id, password) => {
  const authenticateUserQuery = `SELECT * FROM users WHERE id = $1 AND password = $2`; // id와 password로 사용자 정보를 가져오는 쿼리문을 정의합니다.
  try {
    const userInfo = await client.query(authenticateUserQuery, [id, password]); // 쿼리문을 실행합니다.
    return userInfo.rows[0]; // 사용자 정보를 반환합니다.
  } catch (err) {
    console.error(err);
  }
};

export const insertUser = async (client, id, password, email, nickname) => {
  const insertUserQuery = `INSERT INTO users(id, password, email, nickname) VALUES($1, $2, $3, $4) RETURNING *`; // 사용자 정보를 생성하는 쿼리문을 정의합니다.
  try {
    const userInfo = await client.query(insertUserQuery, [
      id,
      password,
      email,
      nickname,
    ]); // 쿼리문을 실행합니다.
    return userInfo.rows[0]; // 사용자 정보를 반환합니다.
  } catch (err) {
    console.error(err);
  }
};
