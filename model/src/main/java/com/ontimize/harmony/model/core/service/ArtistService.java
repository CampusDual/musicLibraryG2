package com.ontimize.harmony.model.core.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.db.SQLStatementBuilder;
import com.ontimize.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.harmony.api.core.service.IArtistService;
import com.ontimize.harmony.model.core.dao.AlbumDao;
import com.ontimize.harmony.model.core.dao.ArtistDao;
import com.ontimize.harmony.model.core.dao.PlaylistDao;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.db.SQLStatementBuilder.BasicField;
import com.ontimize.db.SQLStatementBuilder.BasicOperator;

@Service("ArtistService")
@Lazy
public class ArtistService implements IArtistService {

	@Autowired private ArtistDao artistDao;
	@Autowired private DefaultOntimizeDaoHelper daoHelper; 
	@Override
	
	public EntityResult artistQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		// 
		return this.daoHelper.query(this.artistDao, keyMap, attrList);
	}
	
	@Override
	public EntityResult artistInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException{
		return this.daoHelper.insert(this.artistDao, attrMap);
		}

	@Override
	public EntityResult artistUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.artistDao, attrMap, keyMap);
	}

	@Override
	public EntityResult artistDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		
		return this.daoHelper.delete(this.artistDao, keyMap);
	}

	
	
	@Override
	public EntityResult searchArtistById(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		try {
			List<String> columns = Arrays.asList(ArtistDao.ATTR_NAME, ArtistDao.ATTR_CREATION_YEAR, ArtistDao.ATTR_DESCRIPTION);
			Map <String, Object> filter = (Map<String, Object>) keyMap.get("filter");
		
			int id = Integer.parseInt((String)filter.get("id"));
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,searchById(ArtistDao.ATTR_ARTIST_ID, id));
			return this.daoHelper.query(this.artistDao, key, columns, "searchArtistById");} 
		catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
		
		}
	}

	
	
	
	@Override
	public EntityResult artistSearch(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		try {
			List<String> columns = Arrays.asList(ArtistDao.ATTR_ARTIST_ID,ArtistDao.ATTR_NAME,ArtistDao.ATTR_DESCRIPTION,ArtistDao.ATTR_CREATION_YEAR);
			Map<String, Object> filter = (Map<String, Object>) keyMap.get("filter");
			String searchName = (String) filter.get("name");
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY, searchLike(artistDao.ATTR_NAME, searchName));
<<<<<<< HEAD
			return this.daoHelper.query(this.artistDao,key, columns,"artistSearch");
=======
			return this.daoHelper.query(this.artistDao,key, columns, "artistSearch");
>>>>>>> 82483b20cb04f9012fa494611496bd3d1d7b6c14
		} catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
			
		}
	}


	
	
	private BasicExpression searchLike(String nameCol, String searchTerm) {
		
		BasicField param = new BasicField(nameCol);
		BasicExpression bexp = new BasicExpression(param,BasicOperator.LIKE_OP,'%'+searchTerm+'%');
		return bexp;
	}

	@Override
	public EntityResult newestArtists() {
		Map<String, Object> keyMap= new HashMap<String, Object>();
		List<String> attrList = Arrays.asList(ArtistDao.ATTR_ARTIST_ID,ArtistDao.ATTR_NAME,ArtistDao.ATTR_CREATION_YEAR,ArtistDao.ATTR_CREATION_DATE);
		
		return this.daoHelper.query(this.artistDao, keyMap, attrList,"newestArtists");
		
	}

	

	private BasicExpression searchById(String id, int searchTerm) {
		BasicField field = new BasicField(id);
		BasicExpression bexp = new BasicExpression(field,BasicOperator.EQUAL_OP,searchTerm);
		return bexp;
	}




}




