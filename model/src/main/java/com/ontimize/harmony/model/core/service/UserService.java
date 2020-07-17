package com.ontimize.harmony.model.core.service;


import java.sql.Array;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.harmony.api.core.service.IUserService;
import com.ontimize.harmony.model.core.dao.AlbumDao;
import com.ontimize.harmony.model.core.dao.UserDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Service("UserService")
@Lazy
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {

		String email = this.daoHelper.getUser().getUsername();
		Map<Object,Object> filter = new HashMap<>();
		filter.put(userDao.USR_EMAIL, email);
		
		return this.daoHelper.query(userDao, filter, attrList);
		//String email = this.daoHelper.getUser().getUsername();
		//TODO update so that the only information accessible is the current user's
		
	}

	public EntityResult userInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(userDao, attrMap);
	}

//	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
//		Array.asList(userDao.NAME,userDao.SURNAME,userDao.EMAIL,userDao.PASSWORD);
//		userQuery(new HashMap<>())
//		return this.daoHelper.update(userDao, attrMap, keyMap);
//		//vamos a necesitar la id de usuario, filtramos por ella porque si no
//		//sería un riesgo de seguridad. hay que asegurarse de que no se puede enviar un id de usuario distinto.
//		
//	}
    
	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {

	Map<Object, Object> filter = new HashMap<>();
	List columns = Arrays.asList(this.userDao.ID); 
	Map user = this.userQuery(filter, columns).getRecordValues(0);
	filter.put(this.userDao.ID, user.get(this.userDao.ID));
	return this.daoHelper.update(userDao, attrMap, filter);

	}



	public EntityResult userDelete(Map<?, ?> keyMap) {
		
		
		Map<Object, Object> attrMap = new HashMap<>();
		attrMap.put("down_date", new Timestamp(Calendar.getInstance().getTimeInMillis()));
		return this.daoHelper.update(this.userDao, attrMap, keyMap);
	}

}
